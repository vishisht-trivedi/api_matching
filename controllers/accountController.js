const accounts = require('../data/accounts');

// Get all accounts (protected route)
exports.getAccounts = (req, res) => {
  res.json(accounts);  // Send back the accounts list
};
const companies = require('../data/companies');

// Update company status
exports.updateCompanyStatus = (req, res) => {
  const { id } = req.params; // company ID
  console.log(`Received company ID: ${id}`);
  const { status } = req.body; // new status

  const company = companies.find(c => c.id === Number(id)); // Force ID to be a number

  if (!company) {
    return res.status(404).json({ message: 'Company not found' });
  }

  company.status = status;

  return res.json({ message: 'Status updated successfully', company });
};
