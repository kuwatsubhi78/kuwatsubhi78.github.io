import { Instagram, Mail, Send, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';
import useScrollNavigate from '../layouts/ScrollNavigate';

const ContactPage = () => {
  useScrollNavigate();
  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const lastSubmit = localStorage.getItem('lastSubmitTime');
    if (lastSubmit) {
      const remainingTime = 60000 - (Date.now() - lastSubmit);
      if (remainingTime > 0) setTimeLeft(remainingTime);
    }
  }, []);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(
        () => setTimeLeft((t) => (t > 1000 ? t - 1000 : 0)),
        1000
      );
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (timeLeft > 0)
      return toast.loading(`Tunggu ${Math.ceil(timeLeft / 1000)} detik`);

    if (!validateEmail(formData.email))
      return toast.error('Masukkan email yang valid');

    setLoading(true);
    try {
      const lokasi = await fetch('https://ipapi.co/json/');
      const locationData = await lokasi.json();
      const userLocation = `${locationData.city}, ${locationData.region}, ${locationData.country_name}`;

      const formDataWithDetails = {
        ...formData,
        location: userLocation,
      };

      const response = await axios.post(
        `https://formspree.io/f/meoeyzga`,
        formDataWithDetails,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      );
      if (response.status === 200) {
        setFormData({
          name: '',
          email: '',
          message: '',
        });
        toast.success('Pesan berhasil dikirim');
        localStorage.setItem('lastSubmitTime', Date.now());
        setTimeLeft(60000);
      } else {
        toast.error('Pesan gagal dikirim');
      }
    } catch (error) {
      console.log(error);
      toast.error('Terjadi kesalahan');
    }
    setLoading(false);
  };

  const links = [
    {
      id: 'email',
      href: 'mailto:kuwatsubhi78@gmail.com',
      icon: <Mail size={20} />,
      label: 'kuwatsubhi78@gmail.com',
    },
    {
      id: 'instagram',
      href: 'https://www.instagram.com/kuwatsubhi/',
      icon: <Instagram size={20} />,
      label: 'Kuwat Subhi',
    },
    {
      id: 'github',
      href: 'https://github.com/kuwatsubhi78',
      icon: <Github size={20} />,
      label: 'kuwatsubhi78',
    },
  ];

  return (
    <div className="flex flex-col gap-9 md:grid md:grid-cols-2">
      {/* Bagian Kiri (Teks & Link) */}
      <div className="space-y-8">
        <h1
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 via-blue-500 to-green-500 
          bg-clip-text text-transparent animate-gradient [background-size:300%_150%]"
        >
          Kontak
        </h1>
        <div className="flex flex-wrap gap-3">
          {links.map(({ id, href, icon, label }) => (
            <a
              key={id}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn rounded-lg px-3 py-2 flex items-center gap-2 text-sm md:text-base
  transition-all duration-300
  ${
    isHover === id
      ? 'bg-gradient-to-r from-gray-900 to-gray-400 animate-gradient [background-size:150%_150%]'
      : 'bg-gray-800'
  } flex-wrap`}
              onMouseEnter={() => setIsHover(id)}
              onMouseLeave={() => setIsHover(null)}
            >
              {icon} {label}
            </a>
          ))}
        </div>
      </div>

      {/* Bagian Kanan (Form) */}
      <div
        className="card bg-base-200 rounded-lg bg-gradient-to-r 
          from-gray-900 to-gray-400 animate-gradient [background-size:150%_150%] p-4"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <h3 className="card-title text-lg font-bold">Kontak Saya</h3>
          <div className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input w-full rounded-lg"
              placeholder="Nama"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input w-full rounded-lg"
              placeholder="Email"
              required
            />
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="textarea w-full rounded-lg"
              placeholder="Pertanyaan dan Masukan"
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={timeLeft > 0 || loading}
              className="btn btn-primary rounded-lg flex items-center gap-2"
            >
              <Send size={20} />
              <span>
                {timeLeft > 0
                  ? `Tunggu ${Math.ceil(timeLeft / 1000)} detik`
                  : loading
                  ? 'Mengirim...'
                  : 'Kirim'}
              </span>
            </button>
          </div>
          <Toaster />
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
