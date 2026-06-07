import { useState } from "react";
import emailjs from "@emailjs/browser";

export const SkillCard = ({ title, skills }) => {
  return (
    <>
    <div className="relative group h-full">

        <div
        className="
          absolute inset-0
          bg-[#36f115]
         
          translate-x-2 translate-y-2
          opacity-0
          group-hover:opacity-100
          transition-all duration-200
          z-0
        "
      />

      <div className=" relative z-10 border-4 border-white bg-[#0d0d0d]
      h-full
      transition-transform duration-200
    group-hover:-translate-x-1
    group-hover:-translate-y-1
      ">
        <div className="border-b-2 border-white p-4 flex justify-between">
          <span className="text-[#39FF14]">const {title} =</span>

          <span className="text-gray-400">// {skills.length}</span>
        </div>

        <div className="p-4">
          [
          <div className="flex flex-wrap gap-3 mt-3">
            {skills.map((skill) => (
              <span key={skill} className="border-2 border-white px-3 py-1">
                "{skill}"
              </span>
            ))}
          </div>
          ]
        </div>
      </div>

    </div>
      
    </>
  );
};

export const ProjectCard = ({
  name,
  status,
  features,
  stack,
  focus,
  github,
  demo,
  engineeringFocus,
  featured = false,
}) => {
  return (
    <div className="relative group">
     
      

      {/* Card */}
      <div
        className="
          relative z-10
          border-4 border-white
          bg-[#0d0d0d]
          p-6
          transition-all duration-200
          group-hover:-translate-x-1
          group-hover:-translate-y-1
        "
      >
        {featured && (
          <div className="mb-4">
            <span className="border border-[#39FF14] px-2 py-1 text-xs text-[#39FF14] font-bold">
              ★ FEATURED PROJECT
            </span>
          </div>
        )}

        <h3 className=" text-2xl md:text-3xl font-bold text-white mb-2">
          {name}
        </h3>

        <p className="text-[#39FF14] mb-4">
          Status: {status}
        </p>

        <div className="mb-4">
          <p className="text-gray-400 mb-2">
            Stack:
          </p>

          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="border border-white px-2 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 mb-2">
            Highlights:
          </p>

          <ul className="space-y-1">
            {features.map((feature) => (
              <li key={feature}>
                ✓ {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <p className="text-gray-400 mb-2">
            Focus:
          </p>

          <div className="flex flex-wrap gap-2">
            {focus.map((item) => (
              <span
                key={item}
                className="text-[#39FF14]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-400 mb-2">
            Engineering Focus:
          </p>

          <div className="flex flex-wrap gap-2">
            {engineeringFocus.map((item) => (
              <span
                key={item}
                className="border border-[#39FF14] px-2 py-1 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 ">
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="border-2 border-white text-sm px-3 mt-5 md:px-4 md:py-2 hover:bg-white hover:text-black transition"
          >
            GitHub ↗
          </a>

          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="bg-[#39FF14] text-black border-2 border-white text-sm px-2 mt-5 md:px-4 md:py-2 font-bold hover:opacity-80 transition"
          >
            Live Demo 
          </a>
        </div>
      </div>
    </div>
  );
};


export const ProfileCard = ({
  platform,
  solved,
  link,
  img,
}) => {
  return (
    <div className="relative group w-full">
      
      <div
        className="
          absolute inset-0
          bg-[#39FF14]
          translate-x-2 translate-y-2
          opacity-0
          group-hover:opacity-100
          transition-all duration-200
        "
      />

      {/* Card */}
      <div
        className="
          relative z-10
          border-4 border-white
          bg-[#0d0d0d]
          p-6 w-full
          transition-all duration-200
          group-hover:-translate-x-1
          group-hover:-translate-y-1
        "
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <img
            src={img}
            alt={platform}
            className="w-14 h-14 object-contain"
          />

          <div>
            <h3 className="text-2xl font-bold text-white">
              {platform}
            </h3>

            <p className="text-[#39FF14]">
              Problems Solved: {solved}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="font-mono text-gray-300 space-y-2 mb-6">
          <p>$ profile.status</p>
          <p className="text-white">
            Active Problem Solver
          </p>

          <p>$ focus.topics</p>
          <p className="text-white">
            Arrays • Trees • Graphs • DP • Greedy
          </p>
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-block
            border-3 border-white
            px-4 py-2
            hover:bg-white
            hover:text-black
            transition
          "
        >
          View Profile ↗
        </a>
      </div>
    </div>
  );
};



export const ContactCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
       
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name,
          email,
          message,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSuccess(true);

      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.log("FULL ERROR:", error);
  console.log("STATUS:", error.status);
  console.log("TEXT:", error.text);

  setError(`${error.status} - ${error.text}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="font-mono">
        {/* NAME */}
        <div className="mb-8">
          <label className="block text-[#39FF14] text-xl mb-2">
            $ name: <span className="text-gray-400">{">>"}</span>
          </label>

          <input
            type="text"
            required
            placeholder="your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="
              w-full
              bg-black
              border-4 border-white
              px-4 py-3
              text-white
              outline-none
              placeholder:text-gray-500
              focus:border-[#39FF14]
              transition-colors
            "
          />
        </div>

        {/* EMAIL */}
        <div className="mb-8">
          <label className="block text-[#39FF14] text-xl mb-2">
            $ email: <span className="text-gray-400">{">>"}</span>
          </label>

          <input
            type="email"
            required
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              bg-black
              border-4 border-white
              px-4 py-3
              text-white
              outline-none
              placeholder:text-gray-500
              focus:border-[#39FF14]
              transition-colors
            "
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-8">
          <label className="block text-[#39FF14] text-xl mb-2">
            $ message: <span className="text-gray-400">{">>"}</span>
          </label>

          <textarea
            rows={6}
            required
            placeholder="type your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="
              w-full
              bg-black
              border-4 border-white
              px-4 py-3
              text-white
              outline-none
              resize-none
              placeholder:text-gray-500
              focus:border-[#39FF14]
              transition-colors
            "
          />
        </div>

        {/* BUTTON */}
        <div className="relative inline-block group cursor-pointer">
          <div
            className="
              absolute inset-0
              bg-[#39FF14]
              opacity-0
              group-hover:opacity-100
              translate-x-2 translate-y-2
              transition-all duration-200
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
              relative
              border-4 border-white
              bg-[#39FF14]
              text-black
              p-3
              md:px-8
              md:py-4
              font-bold
              text-xl
              transition-all duration-200
              group-hover:-translate-x-1
              group-hover:-translate-y-1
              disabled:opacity-70
            "
          >
            {loading ? "$ sending..." : "$ ./send --now"}
          </button>
        </div>

        
        {success && (
          <div className="mt-6 text-[#39FF14]">
            <p>$ mail delivered successfully...</p>
            <p>$ waiting_for_new_message.sh</p>
          </div>
        )}

        
        {error && (
          <div className="mt-6 text-red-400">
            <p>$ error:</p>
            <p>{error}</p>
          </div>
        )}
      </div>
    </form>
  );
};