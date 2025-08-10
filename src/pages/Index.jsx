import { BuyForFriend } from '@/components/BuyForFriend';

// Sample data - in a real app, this would come from an API or URL parameters
const sampleGiftData = {
  id: "eea58c73-ccf3-45c2-b29c-b9b8f84c0423",
  senderName: "John Doe",
  senderPhone: "4323",
  receiverName: "Jane Smith",
  receiverPhone: "3423232",
  relationship: "Best Friend",
  message: "Happy Birthday Jane! Wishing you all the best 🎉",
  occasion: "Birthday",
  itemsOrdered: [
    { name: "Luxury Perfume Gift Set", quantity: 1, price: "1500.00" },
    { name: "Premium Spa Voucher", quantity: 1, price: "2500.00" }
  ],
  claimed: false,
  claimedAt: null,
  createdAt: "2025-08-07T01:13:47.000Z"
};

const Index = () => {
  return <BuyForFriend data={sampleGiftData} />;
};

export default Index;
