import React, {useContext} from 'react'
import { useLocation } from 'react-router-dom'
import ProfileImage from '../../assets/Profile-image.png'
import '../../index.css'
import {UserContext} from '../../context/userContext'

const Profile = () => {
  const {user} = useContext(UserContext);
  console.log(user)
  const date = new Date(user.createdAt).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
})
  
  return (
    <div className='min-h-screen bg-gray-50 py-8'>
      <div className='w-full flex justify-center'>
        <div className='max-w-4xl w-full mx-4'>
          {/* Profile Card */}
          <div className='bg-white shadow-2xl rounded-2xl overflow-hidden'>
            <div className='flex flex-col md:flex-row'>
              {/* Profile Image Section */}
              <div className='md:w-1/3 bg-gradient-to-br from-emerald-400 to-emerald-600 p-8 flex justify-center items-center'>
                <div className='relative'>
                  <img 
                    src={ProfileImage} 
                    alt='Profile' 
                    className='dp rounded-full shadow-lg'
                  />
                  <div className='absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-2 border-white flex items-center justify-center'>
                    <div className='w-3 h-3 bg-white rounded-full'></div>
                  </div>
                </div>
              </div>
              
              {/* Profile Info Section */}
              <div className='md:w-2/3 p-8'>
                <div className='mb-6'>
                  <h1 className='text-4xl font-bold text-gray-800 mb-2'>
                    {user?.username || 'Username'}
                  </h1>
                  <p className='text-lg text-gray-600 mb-4'>
                    {user?.email || 'user@example.com'}
                  </p>
                  <div className='flex items-center space-x-4'>
                    <span className='bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium'>
                      Active Member
                    </span>
                    <span className='text-gray-500 text-sm'>
                      Joined {user ? date : 'January 2024'}
                    </span>
                  </div>
                </div>
                
                {/* Stats Section */}
                <div className='grid grid-cols-3 gap-4 mb-6'>
                  <div className='text-center p-4 bg-gray-50 rounded-lg'>
                    <div className='text-2xl font-bold text-emerald-600'>
                      {user?.score || '0'}
                    </div>
                    <div className='text-sm text-gray-600'>Total Score</div>
                  </div>
                  <div className='text-center p-4 bg-gray-50 rounded-lg'>
                    <div className='text-2xl font-bold text-emerald-600'>
                      {user?.testsCompleted || '0'}
                    </div>
                    <div className='text-sm text-gray-600'>Tests Completed</div>
                  </div>
                  <div className='text-center p-4 bg-gray-50 rounded-lg'>
                    <div className='text-2xl font-bold text-emerald-600'>
                      {user?.rank || 'N/A'}
                    </div>
                    <div className='text-sm text-gray-600'>Rank</div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className='flex space-x-4'>
                  <button className='bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-lg font-medium transition-colors'>
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
            {/* Recent Activity */}
            <div className='bg-white shadow-lg rounded-xl p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Recent Activity</h3>
              <div className='space-y-3'>
                <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                  <div className='w-2 h-2 bg-emerald-500 rounded-full'></div>
                  <span className='text-sm text-gray-700'>Completed Aptitude Test #1</span>
                  <span className='text-xs text-gray-500 ml-auto'>2 hours ago</span>
                </div>
                <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                  <div className='w-2 h-2 bg-blue-500 rounded-full'></div>
                  <span className='text-sm text-gray-700'>Updated Profile Information</span>
                  <span className='text-xs text-gray-500 ml-auto'>1 day ago</span>
                </div>
                <div className='flex items-center space-x-3 p-3 bg-gray-50 rounded-lg'>
                  <div className='w-2 h-2 bg-yellow-500 rounded-full'></div>
                  <span className='text-sm text-gray-700'>Started Practice Session</span>
                  <span className='text-xs text-gray-500 ml-auto'>3 days ago</span>
                </div>
              </div>
            </div>
            
            {/* Performance Overview */}
            <div className='bg-white shadow-lg rounded-xl p-6'>
              <h3 className='text-xl font-semibold text-gray-800 mb-4'>Performance Overview</h3>
              <div className='space-y-4'>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-600'>Quantitative Aptitude</span>
                    <span className='font-medium'>85%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-emerald-500 h-2 rounded-full' style={{width: '85%'}}></div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-600'>Logical Reasoning</span>
                    <span className='font-medium'>72%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{width: '72%'}}></div>
                  </div>
                </div>
                <div>
                  <div className='flex justify-between text-sm mb-1'>
                    <span className='text-gray-600'>Verbal Ability</span>
                    <span className='font-medium'>68%</span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div className='bg-yellow-500 h-2 rounded-full' style={{width: '68%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile

// https://www.figma.com/make/2sCfcjamNtMsXvxddGNbyW/AptiStep-User-Interface-Design?node-id=0-4&t=jqhAsysGGttpOTrp-0