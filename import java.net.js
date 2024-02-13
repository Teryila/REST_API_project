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
@RequestMapping(path = "/tenants")
public class TenantController {

    @Autowired
    private TenantDAO tenantDao;
    
    @GetMapping(path = "/", produces = "application/json")
    public Tenants getTenants() {
        return tenantDao.getAllTenants();
    }

    @PostMapping(path = "/", consumes = "application/json", produces = "application/json")
    public ResponseEntity<Object> addTenant(@RequestBody Tenant tenant) {
        tenantDao.addTenant(tenant);

        // Create the URI for the newly created resource
        URI location = ServletUriComponentsBuilder
                        .fromCurrentRequest()
                        .path("/{id}")
                        .buildAndExpand(tenant.getId())
                        .toUri();

        return ResponseEntity.created(location).build();
    }
}
