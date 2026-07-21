import { motion } from "framer-motion";
import { experience } from "../../../data/portfolio";

export const CardTimeLine = () => {
  return (
    <ul className="timeline">
      {experience.map((item, index) => (
        <motion.li
          key={item.id}
          className="card timeline-item"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, delay: index * 0.05 }}
        >
          <h3>{item.position}</h3>
          <p className="company">{item.company}</p>
          <p className="meta">
            {item.cycle} · {item.meta}
          </p>
          <p className="desc">{item.desc}</p>
        </motion.li>
      ))}
    </ul>
  );
};
