type TCertificate = {
  name: string;
  icon: string;
  description: string;
};

const certificates: Record<string, TCertificate[]> = {
  Azure: [
    {
      name: "AZ-900",
      description:
        "Gained a strong foundation in cloud computing principles and demonstrated proficiency in core Azure services, pricing, and governance.",
      icon: "/images/certifications/azure/AZ-900.webp",
    },
    {
      name: "AZ-204",
      description:
        "Developed and deployed cloud-native applications on Azure, leveraging services like App Service, Functions, and Azure SQL for scalable backend solutions.",
      icon: "/images/certifications/azure/AZ-204.webp",
    },
    {
      name: "AZ-400",
      description:
        "Implemented CI/CD pipelines, automated deployments, and optimized cloud operations using Azure DevOps and modern DevOps practices.",
      icon: "/images/certifications/azure/AZ-400.webp",
    },
    {
      name: "AZ-900",
      description:
        "Designed and architected secure, high-performance, and cost-efficient cloud solutions aligned with Azure best practices.",
      icon: "/images/certifications/azure/AZ-900.webp",
    },
  ],
};

export default certificates;
