import React from 'react';
import TopNav from '@/components/TopNav';
import Sidebar from '@/components/Sidebar';

const SkillTag = ({ label }) => (
  <span className="bg-indigo-600 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2 inline-block hover:bg-indigo-700 transition">
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
            <div className="bg-slate-800 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">AKS & EKS GitOps Platform</h3>
              <p>Managed lifecycle of AKS/EKS clusters using Terraform and ArgoCD with policy-as-code enforcement and GitOps deployment flows.</p>
              <div className="mt-2"><SkillTag label="Terraform" /><SkillTag label="ArgoCD" /><SkillTag label="Kubernetes" /><SkillTag label="EPAC" /></div>
            </div>
            <div className="bg-slate-800 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Multi-Cloud CI/CD Delivery</h3>
              <p>Designed secure pipelines across Azure & AWS using GitHub Actions and Spacelift; managed CODEOWNERS, approvals, and reusable IaC modules.</p>
              <div className="mt-2"><SkillTag label="Spacelift" /><SkillTag label="GitHub Actions" /><SkillTag label="CI/CD" /></div>
            </div>
            <div className="bg-slate-800 p-4 rounded shadow">
              <h3 className="text-lg font-semibold">Secrets & Certificate Automation</h3>
              <p>Integrated Key Vault, Venafi, and CyberArk to automate secret rotation, enhance least-privilege access, and ensure certificate lifecycle management.</p>
              <div className="mt-2"><SkillTag label="Key Vault" /><SkillTag label="Venafi" /><SkillTag label="CyberArk" /></div>
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
            <div>
              <strong>Verizon – Azure Cloud Engineer (2020–2022)</strong>
              <ul className="list-disc ml-5">
                <li>Automated AKS cluster creation and rollback using Helm</li>
                <li>Migrated VM infra with ARM templates and Azure Pipelines</li>
                <li>Integrated Function Apps, App Gateway, and App Insights</li>
              </ul>
            </div>
          </div>
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
