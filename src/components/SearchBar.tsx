"use client";

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({
  search,
  setSearch,
}: Props) {
  return (
    <input
      type="text"
      placeholder="Tìm sản phẩm..."
      value={search}
      onChange={(e) =>
        setSearch(e.target.value)
      }
      className="
      border
      p-3
      rounded-lg
      w-full
      "
    />
  );
}