import { motion } from 'framer-motion';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

export const TimelineElement = ({ item }) => (
  <VerticalTimelineElement
    contentStyle={{ background: 'rgba(16, 36, 68, 0.8)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid rgba(16, 36, 68, 0.8)' }}
    date={item.date}
    iconStyle={{ background: '#2dd4bf', color: '#fff' }}
    icon={typeof item.icon === 'string' ? <span>{item.icon}</span> : item.icon} // ✅ Ensuring valid JSX
  >
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-teal-400">{item.title}</h3>
      <h4 className="text-gray-300">{item.subtitle}</h4> {/* ✅ Replaced 'text-light' */}
      <p>{item.content}</p>
    </motion.div>
  </VerticalTimelineElement>
);