@RestController
@RequestMapping("/tenants")
public class TenantController {
    @Autowired
    private TenantService tenantService;

    // Endpoint for creating a new tenant
    @PostMapping("/")
    public Tenant createTenant(@RequestBody Tenant tenant) {
        return tenantService.saveTenant(tenant);
    }

    // Endpoint for retrieving a tenant by ID
    @GetMapping("/{id}")
    public Tenant getTenantById(@PathVariable Long id) {
        return tenantService.getTenantById(id);
    }

    // Endpoint for retrieving all tenants
    @GetMapping("/")
    public List<Tenant> getAllTenants() {
        return tenantService.getAllTenants();
    }

    // Endpoint for updating a tenant
    @PutMapping("/{id}")
    public Tenant updateTenant(@PathVariable Long id, @RequestBody Tenant tenant) {
        tenant.setTenantId(id);
        return tenantService.saveTenant(tenant);
    }

    // Endpoint for deleting a tenant
    @DeleteMapping("/{id}")
    public void deleteTenant(@PathVariable Long id) {
        tenantService.deleteTenantById(id);
    }
}
