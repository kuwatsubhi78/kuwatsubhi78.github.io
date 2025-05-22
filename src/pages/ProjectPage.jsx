import { useEffect } from 'react';
import { useState } from 'react';
import useScrollNavigate from '../layouts/ScrollNavigate';
import { delay, easeInOut, motion } from 'framer-motion';

const ProjectPage = () => {
  useScrollNavigate();
  const [hovered, setHovered] = useState(false);

  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch('/json/ProjectData.json').then((response) =>
      response.json().then((data) => setDatas(data))
    );
  }, []);
  if (datas.length === 0) {
    return <p>Loading...</p>;
  }

  const openProject = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer'); // Buka di tab baru
    } else {
      alert('URL tidak tersedia!');
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
        ease: easeInOut,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeInOut } },
  };

  return (
    <>
      <h1 className="text-5xl font-bold">
        My{' '}
        <span
          className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 
             bg-clip-text text-transparent 
             animate-gradient [background-size:300%_150%]"
        >
          Projects,
        </span>
      </h1>
      <p>
        Berikut beberapa project yang saya kerjakan secara individu maupun
        kelompok.
      </p>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="masonry"
      >
        {datas.map((data) => (
          <motion.div
            className="card masonry-item bg-base-200 rounded-lg hover:scale-105 transition-all cursor-pointer"
            key={data.id}
            variants={itemVariants}
            onClick={() => openProject(data.url)}
          >
            <div className="card-body hover:cursor-pointer">
              <figure className="group relative aspect-video w-full overflow-hidden hover:overflow-visible">
                <motion.img
                  src={data.images}
                  alt={data.title}
                  className="w-full rounded-lg object-cover bottom-0"
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, rotate: 5, y: -30 }}
                  // transition={{ type: 'spring', stiffness: 300 }}
                  style={{
                    zIndex: hovered ? 50 : 1,
                    top: -20,
                    position: 'absolute',
                  }}
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                />
              </figure>
              <h3 className="card-title">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectPage;
