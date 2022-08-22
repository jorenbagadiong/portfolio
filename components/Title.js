export default function Title({ title }) {
  return (
    <div>
      <div className="titleLine"></div>
      <span className="gradientText text-[2rem] font-bold">{title}</span>
    </div>
  )
}
