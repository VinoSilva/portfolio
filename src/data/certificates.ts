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
      name: "AZ-305",
      description:
        "Designed and architected secure, high-performance, and cost-efficient cloud solutions aligned with Azure best practices.",
      icon: "/images/certifications/azure/AZ-305.webp",
    },
  ],
  AWS: [
    {
      name: "AWS Certified Developer – Associate",
      description:
        "Validated expertise in developing, deploying, and debugging cloud-based applications using AWS services, SDKs, and CI/CD tools to build modern, serverless, and containerized back-end systems.",
      icon: "/images/certifications/aws/AWS Certified Developer Associate.webp",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      description:
        "Demonstrated the ability to design secure, scalable, and highly available cloud architectures on AWS, applying best practices in compute, storage, networking, and cost optimization.",
      icon: "/images/certifications/aws/AWS Certified Solutions Architect - Associate.webp",
    },
    {
      name: "AWS Certified DevOps Engineer",
      description:
        "Developed and managed automated CI/CD pipelines, infrastructure as code, and scalable cloud deployments on AWS following DevOps best practices.",
      icon: "/images/certifications/aws/AWS Certified DevOps Engineer.webp",
    },
  ],
  Linux: [
    {
      name: "The Linux Foundation Certified Sysadmin",
      description:
        "Configured, maintained, and troubleshooted Linux systems and network services, demonstrating strong command-line and system administration expertise.",
      icon: "/images/certifications/linux/The Linux Foundation Certified Sysadmin.webp",
    },
  ],
  Kubernetes: [
    {
      name: "Certified Kubernetes Admin",
      description:
        "Demonstrated proficiency in deploying, managing, and troubleshooting Kubernetes clusters, ensuring reliable, secure, and scalable containerized applications in production environments.",
      icon: "/images/certifications/kubernetes/CKA.webp",
    },
  ],
};

export default certificates;
