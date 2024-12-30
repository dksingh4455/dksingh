"use client"
import { useEffect, useState } from "react";

const Counter = () => {
  const [hasStarted, setHasStarted] = useState(false);

  const counters = [
    { id: 1, label: "Our Experience", target: 12345, icon: "⭐" },
    { id: 2, label: "Farm Specialist", target: 12345, icon: "👥" },
    { id: 3, label: "Complete Project", target: 12345, icon: "✔️" },
    { id: 4, label: "Happy Clients", target: 12345, icon: "☕" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );

    const target = document.querySelector("#counter-section");
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <>
   <div className="bg-[#34AD54]">
    <div
      id="counter-section"
      className=" text-white py-16 flex justify-around items-center flex-wrap max-w-[1240px] mx-auto gap-10"
    >
      {counters.map((counter) => (
        <div key={counter.id} className="text-center">
          <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full mx-auto mb-4 text-2xl">
            {counter.icon}
          </div>
          <p className="text-lg font-medium">{counter.label}</p>
          <h2 className="text-4xl font-bold">
            {hasStarted ? <AnimatedCounter target={counter.target} /> : 0}
          </h2>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

const AnimatedCounter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 200; // Adjust speed
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return Math.ceil(prev + increment);
      });
    }, 20);

    return () => clearInterval(interval);
  }, [target]);

  return count;
};

export default Counter;
