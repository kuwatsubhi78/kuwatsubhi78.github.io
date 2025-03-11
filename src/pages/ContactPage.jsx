import { Instagram, Mail, Send, Github } from 'lucide-react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, Toaster } from 'react-hot-toast';

const ContactPage = () => {
  const [isHover, setIsHover] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [timeLeft, setTimeLeft] = useState(0);
  const [emailError, setEmailError] = useState('');

  // useEffect(() => {
  //   const loadRecaptcha = () => {
  //     if (!window.grecaptcha) {
  //       const script = document.createElement('script');
  //       script.src = `https://www.google.com/recaptcha/api.js?render=${
  //         import.meta.env.VITE_RECAPTCHA_SITE_KEY
  //       }`;
  //       script.async = true;
  //       document.body.appendChild(script);
  //     }
  //   };
  //   loadRecaptcha();
  // }, []);

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

    if (e.target.name === 'email') {
      setEmailError(validateEmail(e.target.value) ? '' : 'Email tidak valid');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (timeLeft > 0)
      return toast.loading(`Tunggu ${Math.ceil(timeLeft / 1000)} detik`);

    if (!validateEmail(formData.email))
      return toast.error('Masukkan email yang valid');

    setLoading(true);
    try {
      // Ambil lokasi pengirim berdasarkan IP
      const lokasi = await fetch('https://ipapi.co/json/');
      const locationData = await lokasi.json();

      // Format lokasi
      const userLocation = `${locationData.city}, ${locationData.region}, ${locationData.country_name}`;

      // Tambahkan waktu & lokasi ke data yang dikirim
      const formDataWithDetails = {
        ...formData,
        location: userLocation, // Tambahkan lokasi berdasarkan IP
      };

      const response = await axios.post(
        `https://formspree.io/f/meoeyzga`,
        // formData,
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
        console.log(response);
        toast.error('Pesan gagal dikirim');
      }
    } catch (error) {
      console.log(error);
      toast.error('Terjadi kesalahan');
    }
    setLoading(false);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true);

  //   if (!window.grecaptcha) {
  //     alert('reCAPTCHA not loaded. Please try again.');
  //     return;
  //   }

  //   const recaptchaToken = await window.grecaptcha.execute(
  //     import.meta.env.VITE_RECAPTCHA_SITE_KEY,
  //     {
  //       action: 'submit',
  //     }
  //   );

  //   try {
  //     const response = await axios.post(
  //       import.meta.env.VITE_RECAPTCHA_FORM_API,
  //       {
  //         ...formData,
  //         recaptchaToken,
  //       }
  //     );

  //     console.log('Full Response:', response);

  //     if (response && response.data) {
  //       console.log('Response Data:', response.data);
  //       toast.success(response.data.message || 'Form submitted successfully!');
  //     } else {
  //       throw new Error('Invalid response from server');
  //     }
  //   } catch (error) {
  //     console.error(
  //       'Error submitting form:',
  //       error.response ? error.response.data : error.message
  //     );
  //     toast.error(error.response?.data?.error || 'Failed to submit form.');
  //   }

  //   setLoading(false);
  // };

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
    <>
      <div className="grid grid-cols-2 gap-9">
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">Kontak</h1>
          <div className="flex flex-wrap gap-2">
            {links.map(({ id, href, icon, label }) => (
              <a
                key={id}
                href={href}
                target="_blank"
                className={`btn rounded-lg px-4 py-2 flex items-center gap-2 transition-all duration-300 
            ${
              isHover === id
                ? 'bg-gradient-to-r from-gray-900 to-gray-400 animate-gradient [background-size:150%_150%]'
                : 'bg-gray-800'
            }`}
                onMouseEnter={() => setIsHover(id)}
                onMouseLeave={() => setIsHover(null)}
              >
                {icon} {label}
              </a>
            ))}
          </div>
        </div>
        <div
          className="card bg-base-200 rounded-lg bg-gradient-to-r 
            from-gray-900 to-gray-400 
            animate-gradient [background-size:150%_150%]"
        >
          <form onSubmit={handleSubmit} className="card-body">
            <h3 className="card-tittle"> Kontak Saya</h3>
            <div className="py-4 space-y-2">
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
                id=""
                rows="5"
                type="text"
                value={formData.message}
                onChange={handleChange}
                className="textarea w-full rounded-lg"
                placeholder="Pertanyaan dan Masukan"
                required
              ></textarea>
            </div>
            <div className="card-actions">
              <button
                type="submit"
                disabled={timeLeft > 0 || loading}
                className="btn btn-primary rounded-lg"
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
    </>
  );
};

export default ContactPage;
