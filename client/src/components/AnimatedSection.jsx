import React from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, className, style, delay = 0, id }) => {
    return (
        <motion.div
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay }}
            className={className}
            style={style}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
