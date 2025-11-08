// app/status/page.tsx
'use client';

import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Clock, RefreshCw, Server, Globe, Database, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';

const services = [
  {
    id: 1,
    name: 'Website',
    description: 'Main company website and landing pages',
    status: 'operational',
    icon: Globe,
    uptime: '99.9%',
    responseTime: '120ms'
  },
  {
    id: 2,
    name: 'API Services',
    description: 'REST API and backend services',
    status: 'operational',
    icon: Server,
    uptime: '99.8%',
    responseTime: '85ms'
  },
  {
    id: 3,
    name: 'AI Resume Builder',
    description: 'AI-powered resume generation platform',
    status: 'operational',
    icon: Cpu,
    uptime: '99.7%',
    responseTime: '200ms'
  },
  {
    id: 4,
    name: 'Multi-Tenant Chatbot',
    description: 'AI chatbot services for multiple clients',
    status: 'degraded',
    icon: Database,
    uptime: '98.5%',
    responseTime: '350ms'
  },
  {
    id: 5,
    name: 'Database',
    description: 'Primary database and storage services',
    status: 'operational',
    icon: Database,
    uptime: '99.9%',
    responseTime: '45ms'
  },
  {
    id: 6,
    name: 'CDN & Assets',
    description: 'Content delivery and static assets',
    status: 'operational',
    icon: Globe,
    uptime: '99.9%',
    responseTime: '25ms'
  }
];

const incidents = [
  {
    id: 1,
    title: 'Increased latency on chatbot services',
    status: 'monitoring',
    severity: 'minor',
    started: '2024-01-15T10:30:00Z',
    updated: '2024-01-15T14:20:00Z',
    description: 'We are observing increased response times on our chatbot services. Our team is actively investigating the issue.'
  },
  {
    id: 2,
    title: 'Scheduled maintenance completed',
    status: 'resolved',
    severity: 'maintenance',
    started: '2024-01-14T02:00:00Z',
    updated: '2024-01-14T04:00:00Z',
    description: 'Routine maintenance was completed successfully. All systems are now operating normally.'
  }
];

const statusConfig = {
  operational: {
    icon: CheckCircle,
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    label: 'Operational'
  },
  degraded: {
    icon: AlertTriangle,
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    label: 'Degraded'
  },
  outage: {
    icon: XCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    label: 'Outage'
  },
  maintenance: {
    icon: Clock,
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    label: 'Maintenance'
  }
};

const incidentStatusConfig = {
  investigating: {
    color: 'bg-yellow-100 text-yellow-800',
    label: 'Investigating'
  },
  identified: {
    color: 'bg-orange-100 text-orange-800',
    label: 'Identified'
  },
  monitoring: {
    color: 'bg-blue-100 text-blue-800',
    label: 'Monitoring'
  },
  resolved: {
    color: 'bg-green-100 text-green-800',
    label: 'Resolved'
  }
};

export default function StatusPage() {
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshData = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  const overallStatus = services.every(service => service.status === 'operational') 
    ? 'operational' 
    : services.some(service => service.status === 'outage') 
      ? 'outage' 
      : 'degraded';

  const StatusIcon = statusConfig[overallStatus].icon;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-4 tracking-tight">
            System Status
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real-time status of all UpwardScript services and platforms
          </p>
        </motion.div>

        {/* Overall Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white rounded-2xl border border-gray-200 p-8 mb-8"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl ${statusConfig[overallStatus].bgColor} flex items-center justify-center`}>
                <StatusIcon className={`w-6 h-6 ${statusConfig[overallStatus].color}`} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">
                  All Systems {statusConfig[overallStatus].label}
                </h2>
                <p className="text-gray-600">
                  Last updated {lastUpdated.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={refreshData}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-gray-400 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
              Refresh
            </motion.button>
          </div>
        </motion.div>

        {/* Services Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
            Services
          </h3>
          <div className="grid gap-4">
            {services.map((service) => {
              const config = statusConfig[service.status];
              const Icon = config.icon;
              
              return (
                <motion.div
                  key={service.id}
                  whileHover={{ scale: 1.01 }}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-lg ${config.bgColor} flex items-center justify-center`}>
                        <service.icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{service.name}</h4>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Uptime</div>
                        <div className="font-semibold text-gray-900">{service.uptime}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Response</div>
                        <div className="font-semibold text-gray-900">{service.responseTime}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon className={`w-5 h-5 ${config.color}`} />
                        <span className={`text-sm font-medium ${config.color}`}>
                          {config.label}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Incidents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-light text-gray-900 mb-6 tracking-tight">
            Recent Incidents
          </h3>
          
          {incidents.length === 0 ? (
            <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-green-900 mb-2">No Active Incidents</h4>
              <p className="text-green-700">All systems are operating normally.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {incidents.map((incident) => {
                const config = incidentStatusConfig[incident.status];
                
                return (
                  <motion.div
                    key={incident.id}
                    whileHover={{ scale: 1.01 }}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
                            {config.label}
                          </span>
                          <span className="text-sm text-gray-500 capitalize">
                            {incident.severity}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900">
                          {incident.title}
                        </h4>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-[15px]">
                      {incident.description}
                    </p>
                    
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                      <div>
                        <span className="font-medium">Started:</span>{' '}
                        {new Date(incident.started).toLocaleString()}
                      </div>
                      <div>
                        <span className="font-medium">Updated:</span>{' '}
                        {new Date(incident.updated).toLocaleString()}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </motion.div>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600 text-sm mb-4">
            For urgent issues, contact our support team at{' '}
            <a href="mailto:support@upwardscript.in" className="text-gray-900 hover:text-gray-700 font-medium">
              support@upwardscript.in
            </a>
          </p>
          <p className="text-gray-500 text-xs">
            This status page is updated automatically every 60 seconds.
          </p>
        </motion.div>
      </div>
    </div>
  );
}