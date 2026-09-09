import { useState } from "react";
import { Search, Ship } from "lucide-react";

const initialForm = {
  origin: "Australia",
  destination: "Paradip",
  vesselType: "Supramax",
  cargo: "Coal",
  cargoQuantity: "50000",
  contractDuration: "15",
};

function ForecastForm() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="rounded-[1.8rem] border border-orange-500/20 bg-[#0d172e]/80 p-6 shadow-[0_16px_45px_rgba(0,0,0,0.4)] backdrop-blur-xl">
      <div className="mb-6 flex items-center gap-3">
        {/* Header Icon Box */}
        <div className="rounded-xl border border-orange-500/30 bg-orange-500/15 p-2.5 text-orange-400">
          <Ship size={20} />
        </div>

        <div>
          <h2 className="text-lg font-black text-white">
            Forecast Parameters
          </h2>

          <p className="text-sm font-medium text-slate-400">
            Enter voyage details to generate a freight forecast.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <InputField
            label="Origin"
            name="origin"
            value={form.origin}
            onChange={handleChange}
            options={[
              "Australia",
              "USA",
              "Mozambique",
              "Russia",
              "Indonesia",
            ]}
          />

          <InputField
            label="Destination"
            name="destination"
            value={form.destination}
            onChange={handleChange}
            options={[
              "Paradip",
              "Vizag",
              "Gangavaram",
              "Gopalpur",
              "Dhamra",
              "Haldia",
            ]}
          />

          <InputField
            label="Vessel Type"
            name="vesselType"
            value={form.vesselType}
            onChange={handleChange}
            options={["Handysize", "Supramax", "Panamax", "Capesize"]}
          />

          <InputField
            label="Cargo"
            name="cargo"
            value={form.cargo}
            onChange={handleChange}
            options={["Coal", "Iron Ore", "Grain", "Petcoke"]}
          />

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Cargo Quantity (MT)
            </label>

            <input
              type="number"
              name="cargoQuantity"
              value={form.cargoQuantity}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-500/20 bg-[#070e1c] px-4 py-3 text-sm font-medium text-white outline-none transition duration-300 focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.25)]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-slate-300">
              Contract Duration
            </label>

            <select
              name="contractDuration"
              value={form.contractDuration}
              onChange={handleChange}
              className="w-full rounded-xl border border-orange-500/20 bg-[#070e1c] px-4 py-3 text-sm font-medium text-white outline-none transition duration-300 focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.25)]"
            >
              <option value="7" className="bg-[#070e1c] text-white">7 Days</option>
              <option value="15" className="bg-[#070e1c] text-white">15 Days</option>
              <option value="30" className="bg-[#070e1c] text-white">30 Days</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-xs font-medium text-slate-400">
            Forecast generated using prototype market data.
          </p>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/25 transition duration-300 hover:shadow-orange-500/40"
          >
            <Search size={17} />
            Generate Forecast
          </button>
        </div>

        {submitted && (
          <p className="mt-4 text-sm font-semibold text-emerald-400">
            Forecast parameters submitted successfully.
          </p>
        )}
      </form>
    </div>
  );
}

function InputField({ label, name, value, onChange, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-semibold text-slate-300">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-orange-500/20 bg-[#070e1c] px-4 py-3 text-sm font-medium text-white outline-none transition duration-300 focus:border-orange-400 focus:shadow-[0_0_15px_rgba(249,115,22,0.25)]"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#070e1c] text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ForecastForm;