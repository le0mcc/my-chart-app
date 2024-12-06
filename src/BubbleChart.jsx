import ChartComponent from "./Chart";

export const BubbleChart = ({ data }) => {
    const bubbleChartData = {
      labels: data.months,
      datasets: [
        {
          label: 'Monthly Sales',
          data: data.sales,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    const bubbleChartOptions = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      };
      return <ChartComponent type="bubble" data={bubbleChartData} options={bubbleChartOptions} />;
};