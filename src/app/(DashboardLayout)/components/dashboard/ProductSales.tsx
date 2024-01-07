
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useTheme } from '@mui/material/styles';
import { Stack, Typography, Avatar, Fab } from '@mui/material';
import { IconArrowDownRight, IconCurrencyDollar } from '@tabler/icons-react';
import DashboardCard from '@/app/(DashboardLayout)/components/shared/DashboardCard';
import ReactApexChart from "react-apexcharts";

const ProductSales = () => {
  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;
  const errorlight = '#fdede8';

  // chart
  // const optionscolumnchart: any = {
  //   chart: {
  //     type: 'area',
  //     fontFamily: "'Plus Jakarta Sans', sans-serif;",
  //     foreColor: '#adb0bb',
  //     toolbar: {
  //       show: false,
  //     },
  //     height: 60,
  //     sparkline: {
  //       enabled: true,
  //     },
  //     group: 'sparklines',
  //   },
  //   stroke: {
  //     curve: 'smooth',
  //     width: 2,
  //   },
  //   fill: {
  //     colors: [primary],
  //     type: 'solid',
  //     opacity: 0.05,
  //   },
  //   markers: {
  //     size: 0,
  //   },
  //   tooltip: {
  //     theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
  //   },
  // };
  // const seriescolumnchart: any = [
  //   {
  //     name: '',
  //     color: primary,
  //     data: [25, 66, 20, 40, 12, 58, 20],
  //   },
  // ];
  const series: any = [44, 55, 67, 83,90,50]
  const options: any = {
    chart: {
      height: 250,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function () {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return 249
            }
          }
        }
      }
    },
    labels: ['Maths', 'Physics', 'Chemistry', 'Biology','Communication','Social Welfare'],
  }

  return (
    <DashboardCard title="Student"
    middlecontent={
        <ReactApexChart options={options} series={series} type="radialBar" height={260}/>
      }
    >
    </DashboardCard>
  );
};

export default ProductSales;
