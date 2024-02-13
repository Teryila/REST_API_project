@Service
public class TenantService {
    @Autowired
    private TenantRepository tenantRepository;

    public Tenant saveTenant(Tenant tenant) {
        return tenantRepository.save(tenant);
    }

    public Tenant getTenantById(Long id) {
        return tenantRepository.findById(id).orElse(null);
    }

    public List<Tenant> getAllTenants() {
        return tenantRepository.findAll();
    }

    public void deleteTenantById(Long id) {
        tenantRepository.deleteById(id);
    }
}
