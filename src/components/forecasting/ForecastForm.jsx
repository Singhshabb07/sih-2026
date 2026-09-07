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
    /* Surface Card: #2A2C30 with #4D5054 Border */
    <div className="rounded-[1.8rem] border border-[#4D5054]/60 bg-[#2A2C30] p-6 shadow-[0_16px_45px_rgba(0,0,0,0.5)]">
      <div className="mb-6 flex items-center gap-3">
        {/* Header Icon Box */}
        <div className="rounded-xl border border-[#4D5054] bg-[#111111] p-2.5 text-[#B5BCBE]">
          <Ship size={20} />
        </div>

        <div>
          {/* Main Title: Crisp White */}
          <h2 className="text-lg font-black text-white">
            Forecast Parameters
          </h2>

          {/* Subtitle: High contrast #B5BCBE */}
          <p className="text-sm text-[#B5BCBE]">
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
            {/* Input Label: High legibility #B5BCBE */}
            <label className="mb-2 block text-sm font-medium text-[#B5BCBE]">
              Cargo Quantity (MT)
            </label>

            {/* Input Element: Background #111111, Text #FFFFFF, Focus border #B5BCBE */}
            <input
              type="number"
              name="cargoQuantity"
              value={form.cargoQuantity}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#4D5054] bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#B5BCBE]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#B5BCBE]">
              Contract Duration
            </label>

            <select
              name="contractDuration"
              value={form.contractDuration}
              onChange={handleChange}
              className="w-full rounded-xl border border-[#4D5054] bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#B5BCBE]"
            >
              <option value="7" className="bg-[#111111] text-white">7 Days</option>
              <option value="15" className="bg-[#111111] text-white">15 Days</option>
              <option value="30" className="bg-[#111111] text-white">30 Days</option>
            </select>
          </div>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          {/* Footer note: #878C8F */}
          <p className="text-xs font-medium text-[#878C8F]">
            Forecast generated using prototype market data.
          </p>

          {/* Primary Action Button: High Contrast #B5BCBE bg with #111111 text */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-xl bg-[#B5BCBE] px-6 py-3 text-sm font-bold text-[#111111] transition hover:bg-white"
          >
            <Search size={17} />
            Generate Forecast
          </button>
        </div>

        {/* Success message: #B5BCBE for dark contrast */}
        {submitted && (
          <p className="mt-4 text-sm font-semibold text-[#B5BCBE]">
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
      <label className="mb-2 block text-sm font-medium text-[#B5BCBE]">{label}</label>

      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full rounded-xl border border-[#4D5054] bg-[#111111] px-4 py-3 text-sm text-white outline-none transition focus:border-[#B5BCBE]"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-[#111111] text-white">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ForecastForm;