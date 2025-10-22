// Import libraries
import type { JSX } from "react";

// Import date
import certificates from "@data/certificates";

const CertificatesSection = () => {
  const renderCertificates = () => {
    const keys = Object.keys(certificates) as (keyof typeof certificates)[];

    const arr: JSX.Element[] = [];

    keys.forEach((key) => {
      const certs = certificates[key];

      arr.push(
        <div key={key}>
          <h4 className="text-3xl font-bold font-poppins mb-10">{key}</h4>
          <div className="flex flex-wrap gap-4 mt-5">
            {certs.map(({ icon, name, description }) => {
              return (
                <div
                  key={name}
                  className="flex  flex-col w-72 shadow-primary-xl items-center gap-4 p-4 rounded-xl"
                >
                  <img
                    src={icon}
                    className="w-20 h-20 rounded-full"
                    alt={`cert-${name}`}
                  />
                  <p className="font-semibold font-montserrat text-lg">
                    {name}
                  </p>
                  <p className="font-semibold font-montserrat text-sm text-gray-700">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    });

    return <>{arr}</>;
  };

  return (
    <div>
      <h2 className="text-5xl font-poppins font-bold">
        Certificates<span className="text-primary">.</span>
      </h2>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10">{renderCertificates()}</div>
      </div>
    </div>
  );
};

export default CertificatesSection;
