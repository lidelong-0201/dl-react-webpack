import clsx from 'classnames'
import styles from './index.less'

function App() {
  return (
    <div
      id='app'
      className={clsx(styles.root, 'bg-gradient-to-r from-purple-500 via-pink-500 to-red-500')}
    >
      <div className='flex items-center justify-center min-h-screen'>
        <div className='max-w-md bg-white p-8 shadow-lg rounded-lg'>
          <h1 className='text-4xl font-bold mb-6 text-center text-gray-800'>欢迎</h1>
          <p className='text-lg text-gray-700 mb-8 text-center'>
            感谢使用dl-cli-react-webpack-ts脚手架
          </p>
          <button className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
