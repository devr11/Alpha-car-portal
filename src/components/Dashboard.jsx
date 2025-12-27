"use client"
import React, { useState, useEffect } from 'react'

const Dashboard = () => {
  const [showEMICalculator, setShowEMICalculator] = useState(false);
  const [loanAmount, setLoanAmount] = useState(1060800);
  const [downPayment, setDownPayment] = useState(265200);
  const [duration, setDuration] = useState(66);
  const [emi, setEmi] = useState(22581);

  const carPrice = 1400000;

  useEffect(() => {
    const principal = loanAmount;
    const rate = 8.5 / 100 / 12;
    const months = duration;
    
    if (principal > 0 && months > 0) {
      const emiAmount = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
      setEmi(Math.round(emiAmount));
    }
  }, [loanAmount, duration]);

  useEffect(() => {
    setLoanAmount(carPrice - downPayment);
  }, [downPayment]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount).replace('₹', '₹ ');
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <div className='max-w-screen'>
      <div className="fixed bottom-20 right-6 z-40 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
        <div className="text-lg font-bold">₹{formatNumber(emi)}/m</div>
        <div className="text-xs opacity-90">Valid for 02h 04m 18s</div>
      </div>
      
      <button
        onClick={() => setShowEMICalculator(true)}
        className="fixed bottom-6 right-6 z-40 bg-white border-2 border-blue-600 text-blue-600 p-4 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-110 group"
        title="EMI Calculator"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300">
          <rect width="4" height="16" x="6" y="2"/>
          <rect width="4" height="16" x="14" y="2"/>
          <rect width="18" height="18" x="3" y="6" rx="2"/>
          <path d="M3 10h18"/>
        </svg>
      </button>

      {showEMICalculator && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="flex items-center justify-center min-h-screen p-4 max-h-screen overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full my-4 max-h-[90vh] overflow-y-auto animate-in slide-in-from-bottom-10 duration-300">
              <div className="flex justify-between items-center p-6 pb-4">
                <h2 className="text-xl font-semibold text-gray-900">Check Eligibility</h2>
                <button
                  onClick={() => setShowEMICalculator(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6 6 18"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">EMI Calculator</h3>
                
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Loan Amount</label>
                    <span className="text-lg font-semibold text-[#561381]">{formatCurrency(loanAmount)}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="100000"
                      max="1326000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #561381 0%, #561381 ${((loanAmount - 100000) / (1326000 - 100000)) * 100}%, #e5e7eb ${((loanAmount - 100000) / (1326000 - 100000)) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹ 1,00,000</span>
                    <span>₹ 13,26,000</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Down Payment*</label>
                    <span className="text-lg font-semibold text-[#561381]">{formatCurrency(downPayment)}</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1226000"
                      value={downPayment}
                      onChange={(e) => setDownPayment(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #561381 0%, #561381 ${(downPayment / 1226000) * 100}%, #e5e7eb ${(downPayment / 1226000) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>₹ 0</span>
                    <span>₹ 12,26,000</span>
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-gray-700">Duration of Loan</label>
                    <span className="text-lg font-semibold text-[#561381]">{duration} Months</span>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="12"
                      max="84"
                      value={duration}
                      onChange={(e) => setDuration(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right, #561381 0%, #561381 ${((duration - 12) / (84 - 12)) * 100}%, #e5e7eb ${((duration - 12) / (84 - 12)) * 100}%, #e5e7eb 100%)`
                      }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>12 Months</span>
                    <span>84 Months</span>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ₹ {formatNumber(emi)} <span className="text-base font-normal text-gray-600">per month</span>
                  </div>
                  <button className="text-[#561381] text-sm font-medium flex items-center gap-1 hover:text-[#461065] transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v5h5"/>
                      <path d="M3 8a8 8 0 0 1 16 0"/>
                      <path d="M21 21v-5h-5"/>
                      <path d="M21 16a8 8 0 0 1-16 0"/>
                    </svg>
                    View Loan Breakup
                  </button>
                </div>

                <button className="w-full bg-[#561381] text-white py-4 rounded-xl font-semibold text-lg hover:bg-[#461065] transition-colors flex items-center justify-center gap-2">
                  <span className="text-yellow-300 text-xl">💰</span>
                  Check eligibility
                </button>

                <div className="mt-4 text-xs text-gray-500 leading-relaxed">
                  <p className="mb-2">*Rate of interest can vary subject to credit profile. Loan approval is at the sole discretion of the finance partner.</p>
                  <p>**Processing fee and other loan charges are not included.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard