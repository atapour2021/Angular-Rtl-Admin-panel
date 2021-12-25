import { Injectable } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { GridColumnsDto, GridListDataDto } from '../dto';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  ColumnDefs: GridColumnsDto[] = [
    { headerName: 'ArtNo', field: 'ArtNo', sortable: true, filter: true },
    {
      headerName: 'Provider',
      field: 'Provider',
      sortable: true,
      filter: true
    },
    {
      headerName: 'ProviderArtNo',
      field: 'ProviderArtNo',
      sortable: true,
      filter: true
    },
    { headerName: 'Brand', field: 'Brand', sortable: true, filter: true },
    { headerName: 'Price', field: 'Price', sortable: true, filter: true },
    {
      headerName: 'BuyAccount',
      field: 'BuyAccount',
      sortable: true,
      filter: true
    }
  ];
  RowData: GridListDataDto[] = [
    {
      ArtNo: '100',
      Provider: 'IPhone 11',
      ProviderArtNo: '1Yu',
      Brand: 'Apple',
      Price: 7810.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '101',
      Provider: 'Samsung galaxy',
      ProviderArtNo: '1Yu',
      Brand: 'Samsung',
      Price: 2310.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '102',
      Provider: 'Iphone 11 Pro',
      ProviderArtNo: '1Yu',
      Brand: 'Apple',
      Price: 7810.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '103',
      Provider: 'Intex',
      ProviderArtNo: '1Yu',
      Brand: 'Intex',
      Price: 5810.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '100',
      Provider: 'IPhone 11',
      ProviderArtNo: '1Yu',
      Brand: 'Apple',
      Price: 7810.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '101',
      Provider: 'Samsung galaxy',
      ProviderArtNo: '1Yu',
      Brand: 'Samsung',
      Price: 2310.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '102',
      Provider: 'Iphone 11 Pro',
      ProviderArtNo: '1Yu',
      Brand: 'Apple',
      Price: 7810.23,
      BuyAccount: '123'
    },
    {
      ArtNo: '103',
      Provider: 'Intex',
      ProviderArtNo: '1Yu',
      Brand: 'Intex',
      Price: 5810.23,
      BuyAccount: '123'
    }
  ];
  barChartConfig: ChartConfiguration = {
    type: 'bar',
    data: {
      labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
      datasets: [
        {
          label: '# of Votes',
          data: [200, 50, 30, 15, 20, 34],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {}
    }
  };
  doughnutChartConfig: ChartConfiguration = {
    type: 'doughnut',
    data: {
      labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
      datasets: [
        {
          label: '# of Votes',
          data: [50, 29, 15, 10, 7],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          hoverBackgroundColor: [
            '#FFCE56',
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#FF6384'
          ]
        }
      ]
    }
  };
  lineChartConfig: ChartConfiguration = {
    type: 'line',
    data: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'Sell per week',
          fill: false,
          // lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 10,
          data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
          spanGaps: false
        }
      ]
    }
  };

  getGridColumns(): GridColumnsDto[] {
    return this.ColumnDefs;
  }
  getData(): GridListDataDto[] {
    return this.RowData;
  }

  getBarChartConfig(): ChartConfiguration {
    return this.barChartConfig;
  }
  getDoughnutChartConfig(): ChartConfiguration {
    return this.doughnutChartConfig;
  }
  getLineChartConfig(): ChartConfiguration {
    return this.lineChartConfig;
  }
}
