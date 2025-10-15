import './App.scss';
import WeddingFamily from './components/WeddingFamily/WeddingFamily';
import WeddingInvitation from './components/WeddingInvitation';
const App = () => {
  return (
    <div className="page-view">
      <WeddingInvitation
        title="Đức Hùng - Huyền Trang"
        time="CHỦ NHẬT - 11H00"
        date="15.12.2024"
      />
      <WeddingFamily />
    </div>
  );
};

export default App;
