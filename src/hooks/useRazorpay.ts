import { useNavigate } from "react-router-dom";

// src/hooks/useRazorpay.ts
export const useRazorpay = () => {
  const navigate = useNavigate();

  const RAZORPAYID = import.meta.env.VITE_RAZORPAY_KEY_ID

  const initiatePayment = async (plan: any) => {
    // 1. CALL YOUR BACKEND TO GET ORDER_ID (Crucial for security)
    const orderResponse = await fetch('YOUR_BACKEND_URL/create-order', {
      method: 'POST',
      body: JSON.stringify({ amount: plan.price })
    });
    const order = await orderResponse.json();

    const options = {
    //   key: "YOUR_KEY_ID",
      key: RAZORPAYID,
      amount: order.amount,
      order_id: order.id, // This links the payment to your backend order
      name: "Vertical Living",
      handler: (response: any) => {
        // Redirect to success on successful capture
        navigate(`/payment-success?id=${response.razorpay_payment_id}`);
      },
      modal: {
        ondismiss: () => navigate('/payment-failed')
      },
      theme: { color: "#ffc000" }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  return { initiatePayment };
};



//  need to keep in houseofram

// Backend Logic for houseofram.in
// const corsOptions = {
//   origin: async (origin, callback) => {
//     // 1. If there's no origin (like a mobile app or server-to-server), allow it
//     if (!origin) return callback(null, true);

//     // 2. Look up the organization in your DB by their domain
//     const org = await Organization.findOne({ domain: origin });

//     // 3. If the org exists and is allowed to process public transactions
//     if (org && org.publictransactions) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS: Unregistered Organization'));
//     }
//   }
// };

// app.use(cors(corsOptions));




// houseofram.in/api/v1/payments/create-order
// app.post('/api/v1/payments/create-order', async (req, res) => {
//   try {
//     const { organizationId, planId, customerInfo } = req.body;

//     // 1. Validate Organization (This solves your CORS/Maintenance worry)
//     const org = await Organization.findOne({ _id: organizationId, publictransactions: true });
//     if (!org) return res.status(403).json({ message: "Organization not authorized" });

//     // 2. Get Price from DB (Secure)
//     const plan = await Plan.findOne({ _id: planId, organizationId });
//     if (!plan) return res.status(404).json({ message: "Design plan not found" });

//     // 3. Create Order with Razorpay
//     const options = {
//       amount: plan.price * 100, // Amount in paise
//       currency: "INR",
//       receipt: `receipt_${Date.now()}`,
//       notes: {
//         organizationId: organizationId, // Store this so we know who owns the money later
//         planName: plan.name,
//         customerName: customerInfo.name
//       }
//     };

//     const order = await razorpay.orders.create(options);

//     // 4. Return Order ID to the Static Site
//     res.json({
//       success: true,
//       order_id: order.id,
//       amount: order.amount,
//       key_id: process.env.RAZORPAY_KEY_ID // Send your public key to frontend
//     });

//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// Backend at houseofram.in
// app.post('/api/v1/payments/verify', async (req, res) => {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature, organizationId, customerDetails } = req.body;

//     // 1. Check if the organization has publictransactions: true
//     const org = await Organization.findById(organizationId);
//     if (!org || !org.publictransactions) {
//         return res.status(403).json({ message: "Feature not enabled for this org" });
//     }

//     // 2. Verify the signature using Razorpay's secret key
//     const generated_signature = crypto
//         .createHmac('sha256', process.env.RAZORPAY_SECRET)
//         .update(razorpay_order_id + "|" + razorpay_payment_id)
//         .digest('hex');

//     if (generated_signature === razorpay_signature) {
//         // 3. Store in the database under this specific organizationId
//         const transaction = await Transaction.create({
//             organizationId,
//             paymentId: razorpay_payment_id,
//             amount: req.body.amount,
//             customer: customerDetails, // Name, Email, Phone
//             status: 'captured'
//         });

//         res.json({ success: true, transactionId: transaction._id });
//     } else {
//         res.status(400).json({ success: false, message: "Invalid Signature" });
//     }
// });