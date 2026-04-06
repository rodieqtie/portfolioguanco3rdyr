import { motion } from 'framer-motion';

const ServiceCard = ({ title, description, icon: Icon }) => (
  <motion.div
    className="card fade-in-element premium-card service-card"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="service-icon-wrap">
      <Icon size={42} className="glow accent-icon" />
    </div>
    <h3>{title}</h3>
    <p>{description}</p>
  </motion.div>
);

export default ServiceCard;

