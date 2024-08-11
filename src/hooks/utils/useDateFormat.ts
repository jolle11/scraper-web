import { useCallback } from "react";

type DateFormat = "dd/mm/yyyy" | "mm/dd/yyyy" | "yyyy-mm-dd";

const useDateFormat = (format: DateFormat = "dd/mm/yyyy") => {
	return useCallback(
		(input: string | number | Date): string => {
			const date = new Date(input);

			if (Number.isNaN(date.getTime())) {
				console.error("Invalid date input");
				return "Invalid Date";
			}

			const day = date.getDate().toString().padStart(2, "0");
			const month = (date.getMonth() + 1).toString().padStart(2, "0");
			const year = date.getFullYear();

			switch (format) {
				case "dd/mm/yyyy":
					return `${day}/${month}/${year}`;
				case "mm/dd/yyyy":
					return `${month}/${day}/${year}`;
				case "yyyy-mm-dd":
					return `${year}-${month}-${day}`;
				default:
					return `${day}/${month}/${year}`;
			}
		},
		[format],
	);
};

export default useDateFormat;
