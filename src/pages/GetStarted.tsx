import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Palette, Settings, Calendar, Clock, Send, ArrowLeft, ArrowRight, CheckCircle, Rocket } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface FormData {
  service: string;
  time: string;
  date: string;
  description: string;
  name: string;
  email: string;
  phone: string;
}

const GetStarted: React.FC = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    service: '',
    time: '',
    date: '',
    description: '',
    name: '',
    email: '',
    phone: ''
  });

  const services = [
    {
      id: 'it',
      title: 'IT Solutions',
      icon: <Monitor className="w-6 h-6" />,
      description: 'Custom development, cloud solutions, and technical infrastructure'
    },
    {
      id: 'branding',
      title: 'Branding & Marketing',
      icon: <Palette className="w-6 h-6" />,
      description: 'Brand identity, marketing strategies, and creative solutions'
    },
    {
      id: 'systems',
      title: 'Business Systems',
      icon: <Settings className="w-6 h-6" />,
      description: 'Process automation, workflows, and business optimization'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM',
    '04:00 PM', '05:00 PM'
  ];

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const templateParams = {
        service_type: services.find(s => s.id === formData.service)?.title || formData.service,
        meeting_date: formData.date,
        meeting_time: formData.time,
        project_description: formData.description,
        from_name: formData.name,
        from_email: formData.email,
        phone_number: formData.phone
      };

      await emailjs.send(
        'service_fsdjmnj',
        'template_xbtd1kf',
        templateParams,
        '7boIl4bxFmp7QHPZ2'
      );

      setSubmitStatus('success');
      // Reset form after successful submission
      setFormData({
        service: '',
        time: '',
        date: '',
        description: '',
        name: '',
        email: '',
        phone: ''
      });
      setStep(1);
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return formData.service !== '';
      case 2:
        return formData.time !== '' && formData.date !== '';
      case 3:
        return formData.description !== '';
      case 4:
        return (
          formData.name !== '' &&
          formData.email !== '' &&
          formData.phone !== ''
        );
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#178E79]/10 to-purple-50 py-12 mb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#178E79]/10 rounded-full mb-6">
              <Rocket className="w-8 h-8 text-[#178E79]" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              Start Your{' '}
              <span className="bg-gradient-to-r from-[#178E79] to-purple-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete the following steps to begin your transformation. Our team will review your requirements 
              and get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 rounded"></div>
          <div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-[#178E79] rounded transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          ></div>
          <div className="relative flex justify-between">
            {[1, 2, 3, 4].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? 'bg-[#178E79] text-white'
                    : 'bg-gray-200 text-gray-500'
                } transition-colors duration-300 relative group`}
              >
                {stepNumber}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-sm font-medium text-gray-600">
                  {stepNumber === 1 && 'Service'}
                  {stepNumber === 2 && 'Schedule'}
                  {stepNumber === 3 && 'Details'}
                  {stepNumber === 4 && 'Contact'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form ref={formRef} onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Choose a Service</h2>
                  <div className="grid gap-4">
                    {services.map((service) => (
                      <button
                        type="button"
                        key={service.id}
                        onClick={() => setFormData({ ...formData, service: service.id })}
                        className={`p-6 rounded-lg border-2 transition-all duration-300 text-left ${
                          formData.service === service.id
                            ? 'border-[#178E79] bg-[#178E79]/5'
                            : 'border-gray-200 hover:border-[#178E79]/50'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${
                            formData.service === service.id
                              ? 'bg-[#178E79] text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}>
                            {service.icon}
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{service.title}</h3>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          </div>
                          {formData.service === service.id && (
                            <CheckCircle className="ml-auto text-[#178E79]" />
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Select time and date for a first contact meeting</h2>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#178E79] focus:border-[#178E79]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Time
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {timeSlots.map((time) => (
                          <button
                            type="button"
                            key={time}
                            onClick={() => setFormData({ ...formData, time })}
                            className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                              formData.time === time
                                ? 'bg-[#178E79] text-white border-[#178E79]'
                                : 'border-gray-200 hover:border-[#178E79]'
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Project Description</h2>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tell us about your project
                    </label>
                    <textarea
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#178E79] focus:border-[#178E79]"
                      placeholder="Please describe your project requirements, goals, and any specific details you'd like us to know..."
                    />
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
                  <div className="grid gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#178E79] focus:border-[#178E79]"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#178E79] focus:border-[#178E79]"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#178E79] focus:border-[#178E79]"
                        placeholder="+1 (555) 000-0000"
                        required
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Status Messages */}
            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-50 text-green-700 rounded-lg flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Your request has been submitted successfully! We'll contact you soon.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg"
                >
                  Something went wrong. Please try again later.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="flex items-center px-6 py-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back
                </button>
              )}
              <div className="ml-auto">
                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!isStepValid()}
                    className={`flex items-center px-6 py-2 rounded-lg ${
                      isStepValid()
                        ? 'bg-[#178E79] text-white hover:bg-[#147a68]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors duration-200`}
                  >
                    Next
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!isStepValid() || isSubmitting}
                    className={`flex items-center px-6 py-2 rounded-lg ${
                      isStepValid() && !isSubmitting
                        ? 'bg-[#178E79] text-white hover:bg-[#147a68]'
                        : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    } transition-colors duration-200`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⌛</span>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;