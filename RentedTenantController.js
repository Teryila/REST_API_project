import java.net.URI;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.example.demo.Tenants;
import com.example.demo.TenantDAO;
import com.example.demo.Tenant;

@RestController
@RequestMapping(path = "/rented-tenants")
public class RentedTenantController {

    @Autowired
    private TenantDAO tenantDao;

    // Endpoint for retrieving all rented tenants
    @GetMapping(path = "/", produces = "application/json")
    public Tenants getRentedTenants() {
        return tenantDao.getAllTenants();
    }

    // Endpoint for adding a new rented tenant
    @PostMapping(path = "/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addRentedTenant(@RequestBody Tenant tenant) {
        // Generating a unique ID for the new tenant
        Integer id = tenantDao.getAllTenants().getTenantList().size() + 1;
        tenant.setId(id);

        // Adding the tenant to the list
        tenantDao.addTenant(tenant);

        // Building the URI for the newly created resource
        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(tenant.getId())
                        .toUri();

        // Returning a response with the URI of the newly created tenant
        return ResponseEntity.created(location).build();
    }
}
