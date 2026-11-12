
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  writeBatch,
} from 'firebase/firestore'

import { db } from '../firebase.js'

// Listen to all vendors in Firestore.
export function subscribeToVendors(onData, onError) {
  return onSnapshot(
    collection(db, 'vendors'),
    (snapshot) => {
      const vendors = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }))

      onData(vendors)
    },
    onError,
  )
}

// Listen to one vendor.
export function subscribeToVendor(vendorId, onData, onError) {
  return onSnapshot(
    doc(db, 'vendors', vendorId),
    (snap) => {
      const vendor = snap.exists()
        ? { id: snap.id, ...snap.data() }
        : null

      onData(vendor)
    },
    onError,
  )
}

// Listen to one vendor's menu.
export function subscribeToMenu(vendorId, onData, onError) {
  return onSnapshot(
    collection(db, 'vendors', vendorId, 'menu'),
    (snapshot) => {
      const menu = snapshot.docs.map((d) => ({
        id: d.id,
        vendorId,
        ...d.data(),
      }))

      onData(menu)
    },
    onError,
  )
}

// Copy vendors.json into Cloud Firestore.
// Preserve the existing specialEndsAt Timestamp.
export async function seedDemoData(vendors) {
  const batch = writeBatch(db)

  for (const { menu, id, ...vendor } of vendors) {

    // Write the vendor information.
    batch.set(
      doc(db, 'vendors', id),
      vendor
    )

    // Write every menu item for this vendor.
    for (const { id: itemId, ...item } of menu) {

      // Reference the menu item's document.
      const itemRef = doc(db, 'vendors', id, 'menu', itemId)

      // Read the existing document from Firestore.
      const existing = await getDoc(itemRef)

      // Preserve the existing countdown deadline if present.
      const specialEndsAt = existing.exists()
        ? existing.data().specialEndsAt
        : undefined

      // Copy the menu item data from vendors.json.
      const itemData = { ...item }

      // Keep the existing Firestore Timestamp.
      if (specialEndsAt) {
        itemData.specialEndsAt = specialEndsAt
      }

      // Add the menu item to the batch.
      batch.set(itemRef, itemData)
    }
  }

  // Upload all vendors and menus together.
  await batch.commit()
}
