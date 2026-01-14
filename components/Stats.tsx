import React from 'react';

const stats = [
  { value: "150k+", label: "Burgers Served" },
  { value: "12", label: "Craft Taps" },
  { value: "0", label: "Apologies" },
  { value: "4.9", label: "Avg Rating" }
];

const Stats: React.FC = () => {
  return (
    <section className="bg-mustard py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-background-dark">
            <p className="text-6xl font-black italic tracking-tighter">{stat.value}</p>
            <p className="text-sm font-bold uppercase tracking-widest mt-2 border-t-2 border-background-dark pt-2">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;