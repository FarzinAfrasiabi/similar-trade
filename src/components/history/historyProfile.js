const HistoryProfile = ({ title, desc }) => {
  return (
    <div className="flex min-w-[70px] md:min-w-max flex-auto flex-col items-center gap-y-2 text-gray-600 text-sm">
      <span>{title}</span>
      <span className="text-gray-900">{desc}</span>
    </div>
  );
};

export default HistoryProfile;
