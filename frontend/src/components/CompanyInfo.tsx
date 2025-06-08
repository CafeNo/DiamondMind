import { useEffect, useState } from "react";

interface CompanyInfo {
  name: string;
  slogan: string;
  about: string;
}

const CompanyInfoSection = () => {
  const [info, setInfo] = useState<CompanyInfo | null>(null);

  useEffect(() => {
    fetch("/api/company")
      .then((res) => res.json())
      .then(setInfo)
      .catch(console.error);
  }, []);

  if (!info) return null;

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">{info.name}</h2>
      <p className="text-xl opacity-80 mb-2">{info.slogan}</p>
      <p className="max-w-3xl opacity-70">{info.about}</p>
    </section>
  );
};

export default CompanyInfoSection;
