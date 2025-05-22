import useScrollNavigate from '../layouts/ScrollNavigate';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  useScrollNavigate();
  return (
    <>
      <div className="flex gap-9">
        <div className="flex-1 space-y-10">
          <h1 className="text-5xl font-bold">
            Hai, Saya{' '}
            <span
              className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500 
             bg-clip-text text-transparent 
             animate-gradient [background-size:300%_150%]"
            >
              Kuwat Subhi
            </span>
          </h1>
          <p>
            Saya adalah pengembang web dengan keahlian di Node.js, Laravel,
            MySQL, JWT, serta dokumentasi API menggunakan Swagger. Berpengalaman
            dalam membangun aplikasi web, dengan fokus pada performa dan
            efisiensi.
          </p>
        </div>
        <div className="flex-none">
          <div className="avatar">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-40 rounded-lg"
            >
              <img src="foto.jpg" alt="Kuwat Subhi" />
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="card bg-base-300 rounded-lg "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="card-body">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            Selain keahlian teknis, saya memiliki pengalaman di industri
            manufaktur dan pernah terlibat dalam MSIB Kampus Merdeka,
            berkontribusi pada proyek teknologi untuk pemberdayaan sosial dan
            wisata di Kepulauan Mentawai. Saya siap berkontribusi dalam proyek
            inovatif dan berdampak luas.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default ProfilePage;
