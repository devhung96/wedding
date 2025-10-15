import './App.scss';
import WeddingInvitation from './components/WeddingInvitation';
const App = () => {
  return (
    <div className="page-view">
      <WeddingInvitation
        title="Đức Hùng - Huyền Trang"
        time="CHỦ NHẬT - 11H00"
        date="15.12.2024"
      />
    </div>
  );
};

export default App;
