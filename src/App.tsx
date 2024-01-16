import '@/App.css';
import lessStyles from './app.less';
import scssStyles from './app.scss';
import stylStyles from './app.styl';

function App() {
  return (
    <div>
      <h2>webpack5-react-ts</h2>
      <div className={lessStyles['lessBox']}>
        <div className={lessStyles['box']}>lessBox</div>
      </div>
      <div className={scssStyles['scssBox']}>
        <div className={scssStyles['box']}>scssBox</div>
      </div>
      <div className={stylStyles['stylBox']}>
        <div className={stylStyles['box']}>stylBox</div>
      </div>
    </div>
  );
}

export default App;