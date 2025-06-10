import useScrollNavigate from '../layouts/ScrollNavigate';
import { motion } from 'framer-motion';

const ProfilePage = () => {
  useScrollNavigate();
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row gap-9">
        <div className="flex-1 space-y-6 lg:space-y-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            Hai, Saya{' '}
            <span
              className="bg-gradient-to-r from-red-500 via-blue-500 to-green-500
          bg-clip-text text-transparent
          animate-gradient [background-size:300%_150%]"
            >
              Kuwat Subhi
            </span>
          </h1>
          <p className="text-base sm:text-lg">
            Saya adalah mahasiswa Teknik Informatika di Universitas Ngudi
            Waluyo. Sambil kuliah, saya bekerja di rumah makan, pabrik garmen,
            dan pabrik alat kesehatan. Pengalaman ini membentuk saya menjadi
            pribadi yang mandiri, disiplin, dan terbiasa bekerja keras.
          </p>
        </div>
        <div className="flex-none flex justify-center items-center">
          <div className="avatar w-32 sm:w-36 lg:w-40 rounded-lg overflow-hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full"
            >
              <img src="foto.jpg" alt="Kuwat Subhi" className="w-full h-auto" />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="card bg-base-300 rounded-lg mt-8 p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
      >
        <div className="card-body p-0">
          <motion.p
            className="text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
          >
            Saya pernah mengikuti program MSIB Batch 7 dan magang dalam
            pengembangan website sistem informasi kampus. Saya tertarik pada
            teknologi, khususnya pengembangan aplikasi, dan terus belajar untuk
            meningkatkan keterampilan saya di bidang ini.
          </motion.p>
        </div>
      </motion.div>
    </>
  );
};

export default ProfilePage;
