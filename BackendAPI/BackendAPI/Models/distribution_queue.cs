using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Models
{
    public class distribution_queue
    {
        public int Id { get; set; }
        public string attachment_Name { get; set; }
        public DateTime? aprroved { get; set; }
        public string agency_Code { get; set; }
        public string status { get; set; }
        public int installment_No { get; set; }
        public string delivery_Method { get; set; }
        public string client_name { get; set; }
        public string code { get; set; }
        public string email
        {
            get; set;
        }

    }
}
