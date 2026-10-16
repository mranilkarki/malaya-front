import React from 'react';
import TradeItems from '@/components/malayatrade/tradeItems'; // Check exact file casing (TradeItems vs tradeItems)
import Banner from '@/components/shared/banner';

export const metadata = {
  title: 'Malaya Trade | Connecting Himalayan Products to the World',
  description: 'Specialty coffee, Himalayan crafts, agriculture, and international trade.',
};

export default function TradePage() {
  return (
    <div className="w-full bg-white">
      <Banner />
      <TradeItems />
    </div>
  );
}