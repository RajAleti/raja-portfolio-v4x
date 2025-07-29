import React from 'react';
import TopNav from '@/components/TopNav';
import Sidebar from '@/components/Sidebar';

const SkillTag = ({ label }) => (
  <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 inline-block hover:bg-indigo-400 transition">
    {label}
  </span>
);

export default function Home() {
  return (
    <div className="flex bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100 min-h-screen font-sans">
      <Sidebar />
      <main className="flex-1 p-6 md:p-10 space-y-16 max-w-5xl">
        <TopNav />

        {/* About */}
        <section id="about">
          <div className="flex items-center gap-6">
            <img src="/avatar.jpg" alt="Raja Aleti" className="w-24 h-24 rounded-full border-4 border-indigo-500 shadow-lg" />
            <div>
              <h2 className="text-3xl font-bold mb-1">Raja Aleti</h2>
              <p className="text-slate-300">Sr. Cloud & DevOps Engineer</p>
              <a href="/Raja_Aleti_Resume.pdf" download className="inline-block mt-2 text-sm text-indigo-400 hover:underline">
                📄 Download Resume
              </a>
            </div>
          </div>
          <p className="mt-4 max-w-2xl text-slate-400">
            Certified DevOps Engineer with hands-on experience building secure, scalable platforms across Azure and AWS.
            Specializing in IaC, GitOps, platform automation, and CI/CD governance at enterprise scale.
          </p>
        </section>

        {/* Skills */}
        <section id="skills">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Cloud Platforms</h3>
              <div><SkillTag label="Azure" /><SkillTag label="AWS" /><SkillTag label="GCP (Learning)" /></div>
            </div>
            <div>
              <h3 className="font-semibold">Infrastructure as Code</h3>
              <div><SkillTag label="Terraform" /><SkillTag label="ARM Templates" /><SkillTag label="CloudFormation" /><SkillTag label="YAML" /></div>
            </div>
            <div>
              <h3 className="font-semibold">CI/CD & GitOps</h3>
              <div><SkillTag label="Azure DevOps" /><SkillTag label="GitHub Actions" /><SkillTag label="Jenkins" /><SkillTag label="Spacelift" /><SkillTag label="ArgoCD" /><SkillTag label="Helm" /></div>
            </div>
            <div>
              <h3 className="font-semibold">Security & Monitoring</h3>
              <div><SkillTag label="RBAC" /><SkillTag label="Key Vault" /><SkillTag label="CyberArk" /><SkillTag label="EPAC" /><SkillTag label="Prometheus" /><SkillTag label="Grafana" /></div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl font-bold mb-4">Projects</h2>
          <div className="space-y-6">
            <div className="bg-slate-800 p-4 rounded shadow hover:scale-[1.02] transition">
              <h3 className="text-lg font-semibold">AKS & EKS GitOps Platform</h3>
              <p>Managed lifecycle of AKS/EKS clusters using Terraform and ArgoCD with policy-as-code enforcement and GitOps deployment flows.</p>
              <div className="mt-2"><SkillTag label="Terraform" /><SkillTag label="ArgoCD" /><SkillTag label="Kubernetes" /><SkillTag label="EPAC" /></div>
            </div>
            <div className="bg-slate-800 p-4 rounded shadow hover:scale-[1.02] transition">
              <h3 className="text-lg font-semibold">Multi-Cloud CI/CD Delivery</h3>
              <p>Designed secure pipelines across Azure & AWS using GitHub Actions and Spacelift; managed CODEOWNERS, approvals, and reusable IaC modules.</p>
              <div className="mt-2"><SkillTag label="Spacelift" /><SkillTag label="GitHub Actions" /><SkillTag label="CI/CD" /></div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-2xl font-bold mb-4">Experience</h2>
          <div className="space-y-6 text-sm">
            <div>
              <strong>Starbucks – Sr. Cloud DevOps Engineer (2024–Present)</strong>
              <ul className="list-disc ml-5">
                <li>Managed hybrid infrastructure using Azure Landing Zones & Terraform Cloud</li>
                <li>Automated Spacelift stacks & GitOps promotion via ArgoCD</li>
                <li>Led policy-as-code enforcement using EPAC, Sentinel, and pre-plan hooks</li>
              </ul>
            </div>
            <div>
              <strong>Fisher Investments – Sr. Cloud Infrastructure Engineer (2022–2024)</strong>
              <ul className="list-disc ml-5">
                <li>Built reusable Terraform modules and tested IaC with Go/Terratest</li>
                <li>Integrated monitoring stack with Azure Monitor, Prometheus, Splunk</li>
                <li>Deployed secure pipelines with GitHub Actions, SonarQube, Artifactory</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education">
          <h2 className="text-2xl font-bold mb-4">Education</h2>
          <div className="text-sm">
            <p><strong>University of Central Missouri</strong></p>
            <p>Master’s in Computer Science — GPA 3.90</p>
            <p className="text-slate-400">Jan 2021 – May 2022</p>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications">
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <ul className="list-disc ml-5 text-sm space-y-2">
            <li>
              <a href="https://www.credly.com/badges/f64b99db-98c4-47e2-a8e2-c27cf25d8882/linked_in_profile"
                 className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Microsoft Certified: Azure Administrator Associate (AZ-104)
              </a>
            </li>
            <li>
              <a href="https://www.credly.com/badges/6eb10c20-877c-493b-b085-15f2b4a2bd16/linked_in_profile"
                 className="text-indigo-400 hover:underline" target="_blank" rel="noopener noreferrer">
                Microsoft Certified: DevOps Engineer Expert (AZ-400)
              </a>
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-2xl font-bold mb-2">Contact</h2>
          <p>Email: <a href="mailto:raja2080@outlook.com" className="underline">raja2080@outlook.com</a></p>
          <p>GitHub: <a href="https://github.com/RajAleti" className="underline">github.com/RajAleti</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/raj001" className="underline">linkedin.com/in/raj001</a></p>
        </section>
      </main>
    </div>
  );
}
