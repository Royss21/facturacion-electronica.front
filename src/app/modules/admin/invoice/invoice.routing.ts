import { Routes } from "@angular/router";
import { InvoiceComponent } from "./invoice.component";
import { CreateInvoiceComponent } from "./pages/create-invoice/create-invoice.component";

export default  [
  {
    path: '',
    component: InvoiceComponent,
    children:[
      // {
      //   path         : '',
      //   component    : PagedOrderComponent,
      // },
      {
        path         : 'create',
        component    : CreateInvoiceComponent,
      },
      // {
      //   path         : 'register-sale-day',
      //   component    : RegisterSaleDayComponent,
      // }
    ]
  }
] as Routes;
