function FeatureBox({ icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 bg-secondary-0 border border-secondary-100">
      <div className="text-primary-900 bg-primary-100 rounded-xl p-3">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-lg font-semibold text-secondary-800">{title}</h3>
      <p className="text-sm text-secondary-600">{desc}</p>
    </div>
  );
}

export default FeatureBox;
