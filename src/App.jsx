import { useState, useEffect } from 'react';
import './App.css';
import { faUserGear, faGlobe, faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import RBACImg from './assets/rbac.svg';
import RegionImg from './assets/region.svg';
import ComplianceImg from './assets/compliance.svg';

import CardList from './components/CardList';
import ImagePanel from './components/ImagePanel';

function App() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [progress, setProgress] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const DURATION = 4000;
  const TICK = DURATION / 100;
  const CIRC = 2 * Math.PI * 24;

  const cards = [
    { title: 'Role based access control', icon: faUserGear, image: RBACImg },
    { title: 'Run pipelines in the region of your choice', icon: faGlobe, image: RegionImg },
    { title: 'Compliance that you can trust', icon: faShieldHalved, image: ComplianceImg },
  ];

  const handleCardClick = (idx) => {
    setAutoPlay(false);
    setActiveIndex(idx);
    setProgress(0);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const id = setInterval(() => {
      setProgress((p) => {
        const next = p + 1;
        if (next >= 100) {
          clearInterval(id);
          const nxtIdx = (activeIndex + 1) % cards.length;
          setActiveIndex(nxtIdx);
          setProgress(0);
        }
        return next >= 100 ? 100 : next;
      });
    }, TICK);
    return () => clearInterval(id);
  }, [activeIndex, autoPlay, cards.length]);

  return (
    <section className="w-full bg-white md:pt-15 md:pb-20 pt-10 pb-12">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-end gap-8 px-4 justify-between">
        <div className="flex-shrink-0 max-w-[530px] w-full">
          <h1 className="font-bold leading-[1.3] text-[24px] sm:text-[36px] min-w-0 md:min-w-[530px] text-[#1c1f24]">
            Get enterprise-grade security
          </h1>
          <p className="mt-[20px] mb-[32px] text-[14px] sm:text-[16px] leading-[1.5] font-normal text-[#1c1f24]">
            Regulate and control pipeline access across your team. Configure the data plane region as per your need.
          </p>
          <CardList
            cards={cards}
            activeIndex={activeIndex}
            progress={progress}
            onCardClick={handleCardClick}
            CIRC={CIRC}
          />
        </div>
        <ImagePanel
          src={cards[activeIndex].image}
          alt={cards[activeIndex].title}
        />
      </div>
    </section>
  );
}

export default App;
