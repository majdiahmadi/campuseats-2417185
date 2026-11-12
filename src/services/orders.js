
import {
  collection,
  doc,
  onSnapshot,
  query,
  where,
  serverTimestamp,
  writeBatch,
  updateDoc,
  deleteDoc,
} from 'firebase/firestore'

import { db } from '../firebase.js'


// Save orders from the shopping cart into Firestore.
// Each vendor receives a separate order document.
export async function placeOrders(user, cart, details) {

  // Group cart items according to their vendor.
  const byVendor = new Map()

  for (const line of cart) {

    // Get existing items from the same vendor.
    const lines = byVendor.get(line.item.vendorId) ?? []

    // Add the current item to that vendor's group.
    byVendor.set(line.item.vendorId, [...lines, line])
  }

  // Create a Firestore batch.
  // All orders are written together.
  const batch = writeBatch(db)

  for (const [vendorId, lines] of byVendor) {

    // Create a new order document with an automatic ID.
    const ref = doc(collection(db, 'orders'))

    // Save the order information.
    batch.set(ref, {

      // Student information.
      studentUid: user.uid,
      studentName: details.name,

      // Checkout information.
      mahallah: details.mahallah,
      pickupTime: details.pickupTime,

      // Vendor information.
      vendorId,
      vendorName: lines[0].item.vendorName,

      // Ordered items.
      items: lines.map(({ item, qty }) => ({
        itemId: item.id,
        name: item.name,
        price: item.price,
        qty,
      })),

      // Calculate this vendor's order total.
      total: lines.reduce(
        (sum, { item, qty }) => sum + item.price * qty,
        0
      ),

      // Every new order starts as Received.
      status: 'Received',

      // Let Firestore record when the order was created.
      createdAt: serverTimestamp(),
    })
  }

  // Write all order documents to Firestore.
  await batch.commit()
}


// Listen to orders belonging to the signed-in student.
export function subscribeToMyOrders(uid, onData, onError) {

  // Only retrieve orders where studentUid matches
  // the currently signed-in student's Firebase UID.
  const q = query(
    collection(db, 'orders'),
    where('studentUid', '==', uid)
  )

  // Listen for real-time changes to the student's orders.
  return onSnapshot(
    q,

    (snapshot) => {

      // Convert Firestore documents into JavaScript objects.
      const orders = snapshot.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      }))

      // Sort orders from newest to oldest.
      orders.sort(
        (a, b) =>
          (b.createdAt?.toMillis?.() ?? Date.now()) -
          (a.createdAt?.toMillis?.() ?? Date.now())
      )

      // Send the latest orders back to React.
      onData(orders)
    },

    // Handle Firestore errors.
    onError
  )
}


// WEEK 6 B5: UPDATE AN ORDER

// Change the pickup time of an existing order.
// Only the pickupTime field is updated.
export function changePickupTime(orderId, pickupTime) {

  // Reference the order document in Firestore.
  const orderRef = doc(db, 'orders', orderId)

  // Update the pickup time without changing other fields.
  return updateDoc(orderRef, {
    pickupTime
  })
}


// WEEK 6 B5: DELETE AN ORDER

// Cancel an order by deleting its Firestore document.
export function cancelOrder(orderId) {

  // Reference the order document in Firestore.
  const orderRef = doc(db, 'orders', orderId)

  // Permanently delete the order document.
  return deleteDoc(orderRef)
}
