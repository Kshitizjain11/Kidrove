export default function Toast({ toast }) {
  return (
    <div className={`toast ${toast.show ? 'show' : ''}`}>
      <i className="fas fa-check-circle text-green-400 text-xl"></i>
      <span>{toast.msg}</span>
    </div>
  )
}
