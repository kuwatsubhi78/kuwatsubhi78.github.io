import { useEffect, useState } from 'react';
import useScrollNavigate from '../layouts/ScrollNavigate';
import { motion } from 'framer-motion';

const ProjectPage = () => {
  useScrollNavigate();

  const [hoveredId, setHoveredId] = useState(null); // Ganti ke id, biar responsif hanya yang di-hover
  const [datas, setDatas] = useState([]);

  // Fetch data saat mount
  useEffect(() => {
    fetch('/json/ProjectData.json')
      .then((response) => response.json())
      .then((data) => setDatas(data));
  }, []);

  // Jika data belum ada, tampilkan loading
  if (datas.length === 0) {
    return <p>Loading...</p>;
  }

  // Fungsi untuk buka URL project
  const openProject = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert('URL tidak tersedia!');
    }
  };

  // Variants animasi container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Lebih cepat, agar responsif
      },
    },
  };

  // Variants animasi item
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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

      {/* Container grid responsif */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6"
      >
        {datas.map((data) => (
          <motion.div
            key={data.id}
            variants={itemVariants}
            className="relative card bg-base-200 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out overflow-visible"
            onClick={() => openProject(data.url)}
          >
            <div className="card-body relative overflow-visible">
              <figure className="relative aspect-video w-full rounded-lg group overflow-visible">
                <motion.img
                  src={data.images}
                  alt={data.title}
                  className="w-full h-full object-cover rounded-lg transition-transform duration-300"
                  style={{
                    position: 'absolute', // Biar di atas
                    top: 0,
                    left: 0,
                    zIndex: hoveredId === data.id ? 50 : 1, // Hanya gambar yang di-hover
                  }}
                  animate={
                    hoveredId === data.id
                      ? { scale: 1.1, rotate: 5, y: -20 }
                      : { scale: 1, rotate: 0, y: 0 }
                  }
                  onMouseEnter={() => setHoveredId(data.id)} // Hover masuk
                  onMouseLeave={() => setHoveredId(null)} // Hover keluar
                />
              </figure>
              <h3 className="card-title mt-4">{data.title}</h3>
              <p className="text-sm">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default ProjectPage;
