import { Review } from './Review'; // Importing Review type
import { Service } from './Service'; // Importing Service type
import { ContactInfo } from './ContactInfo'; // Importing ContactInfo type

export interface Company {
  name: string; // Company name
  description: string; // Company description
  services: Service[]; // Array of services offered
  reviews: Review[]; // Array of customer reviews
  contactInfo: ContactInfo; // Contact information
}

export default Company;