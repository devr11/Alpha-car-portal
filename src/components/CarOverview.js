export default function CarOverview({ car }) {
  return (
    <div className="border rounded p-5">
      <h2 className="text-xl font-semibold mb-3">Car Overview</h2>
      <ul className="space-y-2">
        <li><b>Model:</b> {car.model}</li>
        <li><b>Year:</b> {car.year}</li>
        <li><b>Mileage:</b> {car.mileage}</li>
        <li><b>Price:</b> ₹{car.price.toLocaleString()}</li>
      </ul>
    </div>
  );
}
