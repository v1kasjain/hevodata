import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Card = ({ title, icon, isActive, onClick, progress, CIRC, idx }) => (
  <div
    tabIndex={0}
    role="button"
    aria-pressed={isActive}
    data-idx={idx}
    onClick={onClick}
    onKeyDown={e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    }}
    className={`cursor-pointer rounded-[12px] flex items-center gap-4 transition-all duration-300 ease-in-out
      ${isActive
        ? 'bg-white border border-[#cbd2e0] shadow-[8px_2px_16px_0_rgba(3,4,5,0.08)]'
        : 'bg-[#f5f7fa] border border-transparent hover:bg-white hover:border-[#cbd2e0] hover:shadow-[8px_2px_16px_0_rgba(3,4,5,0.08)]'}
      p-3 sm:p-4`
    }
  >
    <div className="relative flex items-center justify-center w-14 h-14 min-w-14 min-h-14">
      {isActive && (
        <svg className="absolute top-0 left-0" width="56" height="56">
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="#e0e0e0"
            strokeWidth="4"
          />
          <circle
            cx="28"
            cy="28"
            r="24"
            fill="none"
            stroke="#5c33cf"
            strokeWidth="4"
            strokeDasharray={CIRC}
            strokeDashoffset={CIRC * (1 - progress / 100)}
            strokeLinecap="round"
            style={{
              transition: 'stroke-dashoffset 0.1s linear',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%'
            }}
          />
        </svg>
      )}
      <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-white">
        <FontAwesomeIcon
          icon={icon}
          className={`text-2xl ${isActive ? 'text-[#5c33cf]' : 'text-[#1c1f24]'}`}
        />
      </div>
    </div>
    <h4 className={`text-[16px] sm:text-[20px] leading-[1.4] font-normal sm:font-semibold ${isActive ? 'text-[#5c33cf]' : 'text-[#1c1f24]'}`}>
      {title}
    </h4>
  </div>
);

export default Card; 